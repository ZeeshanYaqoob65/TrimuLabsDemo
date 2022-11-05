import { gql } from "@apollo/client";

export const CREATE_JOB_MUTATION = gql`
  mutation createJob($input: PostJobInput!) {
    postJob(input: $input) {
      id
      title
      description
      applyUrl
      userEmail
    }
  }
`;
