const { Schema, model, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      validate: {
        validator: (reactionBodyVal) => {
          return reactionBodyVal.length < 280;
        },
        message: "Reaction body must be less than 280 characters!",
      },
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: (createdAtVal) => formatDate(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: this.reactionId,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: {
        validator: function (input) {
          return input.length > 1 && input.length < 280;
        },
        message: "Thought text must be between 1 and 280 characters!",
      },
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: (createdAtVal) => formatDate(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
