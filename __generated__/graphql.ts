export type Maybe<T> = T | null;

export interface UserWhereInput {
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  user: User;

  users: User[];
}

export interface User {
  id: string;

  name: string;

  username: string;

  email: string;
}

export interface Post {
  id: string;
}

// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {
  where: UserWhereInput;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface QueryResolvers<Context = {}, TypeParent = {}> {
  user?: QueryUserResolver<User, TypeParent, Context>;

  users?: QueryUsersResolver<User[], TypeParent, Context>;
}

export type QueryUserResolver<R = User, Parent = {}, Context = {}> = Resolver<
  R,
  Parent,
  Context,
  QueryUserArgs
>;
export interface QueryUserArgs {
  where: UserWhereInput;
}

export type QueryUsersResolver<
  R = User[],
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context>;

export interface UserResolvers<Context = {}, TypeParent = User> {
  id?: UserIdResolver<string, TypeParent, Context>;

  name?: UserNameResolver<string, TypeParent, Context>;

  username?: UserUsernameResolver<string, TypeParent, Context>;

  email?: UserEmailResolver<string, TypeParent, Context>;
}

export type UserIdResolver<R = string, Parent = User, Context = {}> = Resolver<
  R,
  Parent,
  Context
>;
export type UserNameResolver<
  R = string,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserUsernameResolver<
  R = string,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserEmailResolver<
  R = string,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface PostResolvers<Context = {}, TypeParent = Post> {
  id?: PostIdResolver<string, TypeParent, Context>;
}

export type PostIdResolver<R = string, Parent = Post, Context = {}> = Resolver<
  R,
  Parent,
  Context
>;

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers<Context>;
  User?: UserResolvers<Context>;
  Post?: PostResolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
