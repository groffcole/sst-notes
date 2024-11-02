// Create an S3 bucket
export const bucket = new sst.aws.Bucket("sst-notes-upload");

// Create the DynamoDB table
export const table = new sst.aws.Dynamo("sst-notes-table", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { hashKey: "userId", rangeKey: "noteId" },
  });