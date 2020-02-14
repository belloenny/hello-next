/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  JSON: any,
  DateTime: any,
  Upload: any,
  Time: any,
  Date: any,
  Long: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Categories = {
   __typename?: 'Categories',
  name: Scalars['String'],
  restaurants?: Maybe<Array<Maybe<Restaurant>>>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};


export type CategoriesRestaurantsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type CategoryInput = {
  name: Scalars['String'],
  restaurants?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>,
};

export type CreateCategoryPayload = {
   __typename?: 'createCategoryPayload',
  category?: Maybe<Categories>,
};

export type CreateRestaurantInput = {
  data?: Maybe<RestaurantInput>,
};

export type CreateRestaurantPayload = {
   __typename?: 'createRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>,
};

export type CreateRolePayload = {
   __typename?: 'createRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type CreateUserInput = {
  data?: Maybe<UserInput>,
};

export type CreateUserPayload = {
   __typename?: 'createUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};



export type DeleteCategoryInput = {
  where?: Maybe<InputId>,
};

export type DeleteCategoryPayload = {
   __typename?: 'deleteCategoryPayload',
  category?: Maybe<Categories>,
};

export type DeleteRestaurantInput = {
  where?: Maybe<InputId>,
};

export type DeleteRestaurantPayload = {
   __typename?: 'deleteRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>,
};

export type DeleteRolePayload = {
   __typename?: 'deleteRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type DeleteUserInput = {
  where?: Maybe<InputId>,
};

export type DeleteUserPayload = {
   __typename?: 'deleteUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>,
  restaurants?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditRestaurantInput = {
  Name?: Maybe<Scalars['String']>,
  Description?: Maybe<Scalars['String']>,
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>,
  picture?: Maybe<Scalars['ID']>,
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type FileInput = {
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['Float'],
  url: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type InputId = {
  id: Scalars['ID'],
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | Categories | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | Restaurant | CreateRestaurantPayload | UpdateRestaurantPayload | DeleteRestaurantPayload | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
   __typename?: 'Mutation',
  createCategory?: Maybe<CreateCategoryPayload>,
  updateCategory?: Maybe<UpdateCategoryPayload>,
  deleteCategory?: Maybe<DeleteCategoryPayload>,
  createRestaurant?: Maybe<CreateRestaurantPayload>,
  updateRestaurant?: Maybe<UpdateRestaurantPayload>,
  deleteRestaurant?: Maybe<DeleteRestaurantPayload>,
  createRole?: Maybe<CreateRolePayload>,
  updateRole?: Maybe<UpdateRolePayload>,
  deleteRole?: Maybe<DeleteRolePayload>,
  createUser?: Maybe<CreateUserPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  upload: UploadFile,
  multipleUpload: Array<Maybe<UploadFile>>,
  login: UsersPermissionsLoginPayload,
  register: UsersPermissionsLoginPayload,
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>
};


export type MutationCreateRestaurantArgs = {
  input?: Maybe<CreateRestaurantInput>
};


export type MutationUpdateRestaurantArgs = {
  input?: Maybe<UpdateRestaurantInput>
};


export type MutationDeleteRestaurantArgs = {
  input?: Maybe<DeleteRestaurantInput>
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  file: Scalars['Upload']
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  files: Array<Maybe<Scalars['Upload']>>
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
};


export type MutationRegisterArgs = {
  input: UserInput
};

export type Query = {
   __typename?: 'Query',
  category?: Maybe<Categories>,
  categories?: Maybe<Array<Maybe<Categories>>>,
  restaurant?: Maybe<Restaurant>,
  restaurants?: Maybe<Array<Maybe<Restaurant>>>,
  files?: Maybe<Array<Maybe<UploadFile>>>,
  role?: Maybe<UsersPermissionsRole>,
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>,
  user?: Maybe<UsersPermissionsUser>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  me?: Maybe<UsersPermissionsMe>,
};


export type QueryCategoryArgs = {
  id: Scalars['ID']
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRestaurantArgs = {
  id: Scalars['ID']
};


export type QueryRestaurantsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRoleArgs = {
  id: Scalars['ID']
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type Restaurant = {
   __typename?: 'Restaurant',
  Name: Scalars['String'],
  Description: Scalars['String'],
  picture?: Maybe<UploadFile>,
  categories?: Maybe<Array<Maybe<Categories>>>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};


export type RestaurantCategoriesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type RestaurantInput = {
  Name: Scalars['String'],
  Description: Scalars['String'],
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>,
  picture?: Maybe<Scalars['ID']>,
};

export type RoleInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};


export type UpdateCategoryInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditCategoryInput>,
};

export type UpdateCategoryPayload = {
   __typename?: 'updateCategoryPayload',
  category?: Maybe<Categories>,
};

export type UpdateRestaurantInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditRestaurantInput>,
};

export type UpdateRestaurantPayload = {
   __typename?: 'updateRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditRoleInput>,
};

export type UpdateRolePayload = {
   __typename?: 'updateRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type UpdateUserInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditUserInput>,
};

export type UpdateUserPayload = {
   __typename?: 'updateUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};


export type UploadFile = {
   __typename?: 'UploadFile',
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['Float'],
  url: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Morph>>>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'],
  password: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
};

export type UsersPermissionsLoginPayload = {
   __typename?: 'UsersPermissionsLoginPayload',
  jwt: Scalars['String'],
  user: UsersPermissionsMe,
};

export type UsersPermissionsMe = {
   __typename?: 'UsersPermissionsMe',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsMeRole>,
};

export type UsersPermissionsMeRole = {
   __typename?: 'UsersPermissionsMeRole',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type UsersPermissionsPermission = {
   __typename?: 'UsersPermissionsPermission',
  type: Scalars['String'],
  controller: Scalars['String'],
  action: Scalars['String'],
  enabled: Scalars['Boolean'],
  policy?: Maybe<Scalars['String']>,
  role?: Maybe<UsersPermissionsRole>,
  id: Scalars['ID'],
};

export type UsersPermissionsRole = {
   __typename?: 'UsersPermissionsRole',
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  id: Scalars['ID'],
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UsersPermissionsUser = {
   __typename?: 'UsersPermissionsUser',
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsRole>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type RestaurantsQueryVariables = {};


export type RestaurantsQuery = (
  { __typename?: 'Query' }
  & { restaurants: Maybe<Array<Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'Name'>
    & { categories: Maybe<Array<Maybe<(
      { __typename?: 'Categories' }
      & Pick<Categories, 'id' | 'name'>
    )>>>, picture: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);


export const RestaurantsDocument = gql`
    query Restaurants {
  restaurants {
    Name
    categories {
      id
      name
    }
    picture {
      url
    }
  }
}
    `;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRestaurantsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
        return ApolloReactHooks.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, baseOptions);
      }
export function useRestaurantsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, baseOptions);
        }
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<typeof useRestaurantsLazyQuery>;
export type RestaurantsQueryResult = ApolloReactCommon.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;