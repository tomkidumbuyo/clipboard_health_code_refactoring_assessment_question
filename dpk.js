const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0"
const MAX_PARTITION_KEY_LENGTH = 256;

deterministicPartitionKey = (event) => {
  let candidate = event ? getCandidateFromEvent(event): TRIVIAL_PARTITION_KEY;
  if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
  }
  return resizeCandidateLengthToRequiredSize(candidate);
};

getCandidateFromEvent = (event) => {
  if (event.partitionKey) {
      candidate = event.partitionKey;
  } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  return candidate
}

resizeCandidateLengthToRequiredSize = (candidate) => {
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate
}

module.exports = { deterministicPartitionKey, MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY }