const crypto = require("crypto");
const { deterministicPartitionKey, MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the TRIVIAL_PARTITION_KEY when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Returns the partitionKey string if parsed in event.partitionKey and does not exceed MAX_PARTITION_KEY_LENGTH", () => {
    const event = {
      partitionKey: "123456",
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns a generated partitionKey string if event is parsed without a partitionKey", () => {
    const event = {
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).not.toBe(0);
  });

  it("Returns a stringified value if the value passed as partitionKey is not a string", () => {
    const event = {
      partitionKey: {"key": "value"},
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });

  it("Returns a new string  with 128 length when passed a partitionKey with more than MAX_PARTITION_KEY_LENGTH characters", () => {
    const event = {
      partitionKey: crypto.randomBytes(MAX_PARTITION_KEY_LENGTH + 1).toString('hex'),
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).not.toEqual(event.partitionKey);
    expect(trivialKey.length).toEqual(128);
  });

});
