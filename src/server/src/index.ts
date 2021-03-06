import { nexusPrismaPlugin } from '@generated/nexus-prisma';
import Photon from '@generated/photon';
import { idArg, makeSchema, objectType, stringArg } from '@prisma/nexus';
import { GraphQLServer } from 'graphql-yoga';
import { join } from 'path';
import { Context } from './types';

const photon = new Photon();

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context) => ctx.photon,
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.posts({
      pagination: false,
    });
  },
});

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.title();
    t.model.content();
    t.model.published();
    t.model.author();
    t.model.deletedAt();
  },
});

export const Race = objectType({
  name: 'Race',
  definition(t) {
    t.model.id();
    t.model.raceDate();
    t.model.hondai();
    t.model.trackCode();
    t.model.distance();
    t.model.umaRaces({
      pagination: false,
    });
  },
});

export const UmaRace = objectType({
  name: 'UmaRace',
  definition(t) {
    t.model.id();
    t.model.wakuban();
    t.model.umaban();
    t.model.name();
    t.model.sexCode();
    t.model.age();
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.findOnePost({
      alias: 'post',
    });

    t.list.field('feed', {
      type: 'Post',
      resolve: (_, args, ctx) => {
        return ctx.photon.posts.findMany({
          where: { published: true },
        });
      },
    });

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            OR: [{ title: { contains: searchString } }, { content: { contains: searchString } }],
          },
        });
      },
    });

    t.crud.findOneRace({ alias: 'race' });
    t.list.field('races', {
      type: 'Race',
      args: {
        raceDate: stringArg({ nullable: true }),
      },
      resolve: (_, args, ctx) => {
        return ctx.photon.races.findMany({
          where: { raceDate: new Date('raceDate') },
        });
      },
    });
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
    t.crud.deleteOnePost();

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg(),
        content: stringArg({ nullable: true }),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        });
      },
    });

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.photon.posts.update({
          where: { id },
          data: { published: true },
        });
      },
    });
  },
});

const schema = makeSchema({
  types: [Query, Mutation, Post, User, Race, UmaRace, nexusPrisma],
  outputs: {
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
    schema: join(__dirname, '/schema.graphql'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
});

const server = new GraphQLServer({
  schema,
  context: { photon },
});

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
