import { classNames } from './classNames';


describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expValues = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expValues);
  });

  test("with additional class", () => {
    const expValues = "someClass class1 class2 hovered";
    expect(classNames("someClass", {hovered:true}, ["class1", "class2"])).toBe(expValues);
  });

  test("with additional class", () => {
    const expValues = "someClass class1 class2 hovered";
    expect(classNames("someClass", {hovered:true,scrolable: false}, ["class1", "class2"])).toBe(expValues);
  });

  // test("with additional class", () => {
  //   const expValues = "someClass class1 class2 hovered";
  //   expect(classNames("someClass", {hovered:true,scrolable: undefined}, ["class1", "class2"])).toBe(expValues);
  // });
});