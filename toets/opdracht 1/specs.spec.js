describe("Check if titel & charset is right", function () {
  it("test of titel & charset is", function () {
    expect(document.title).toBe("Voorbeeld toets");
    expect(document.charset).toBe("UTF-8");
  });
});

describe("check if item inside>unitest is same as item", function () {
  it("check item", function () {
    expect(unitTest.item).toBe("voorbeeld");
  });
});

describe("check if nummer inside>unitTest is same as 2", function () {
  it("check nummer", function () {
    expect(unitTest.nummer).toEqual(2);
  });
});

describe("check if beschrijving inside>unitTest is same as Beschrijving", function () {
  it("check beschrijving", function () {
    expect(unitTest.beschrijving).toBe("Beschrijving");
  });
});

describe("check if boodschap inside > unitTest is same as Hallo", function () {
  it("check boodschap", function () {
    expect(unitTest.boodschap).toEqual("Hallo");
  });
});
