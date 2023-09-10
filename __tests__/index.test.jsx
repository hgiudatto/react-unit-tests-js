describe("hello", () => {
  const expectedPerson = { name: "James Smith" };

  it("hello", () => {
    expect(1).toBe(1);
  });

  it("object equality", () => {
    expect({ name: "James Smith" }).toEqual(expectedPerson);
  });
});
