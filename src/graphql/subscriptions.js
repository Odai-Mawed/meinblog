/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      title
      summary
      content
      judgement
      image
      imageDescription
      blog {
        id
        name
        createdAt
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      title
      summary
      content
      judgement
      image
      imageDescription
      blog {
        id
        name
        createdAt
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      title
      summary
      content
      judgement
      image
      imageDescription
      blog {
        id
        name
        createdAt
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      post {
        id
        title
        summary
        content
        judgement
        image
        imageDescription
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      authorID
      author {
        id
        firstName
        lastName
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      post {
        id
        title
        summary
        content
        judgement
        image
        imageDescription
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      authorID
      author {
        id
        firstName
        lastName
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      post {
        id
        title
        summary
        content
        judgement
        image
        imageDescription
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      authorID
      author {
        id
        firstName
        lastName
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($owner: String) {
    onCreateAuthor(owner: $owner) {
      id
      firstName
      lastName
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($owner: String) {
    onUpdateAuthor(owner: $owner) {
      id
      firstName
      lastName
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($owner: String) {
    onDeleteAuthor(owner: $owner) {
      id
      firstName
      lastName
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
