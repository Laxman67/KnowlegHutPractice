{
  {
    const nums = [4, 10, 20, 11, 2, 15, 3];
    var maxNum = nums[0];
    console.log(nums.sort());

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > maxNum) {
        maxNum = nums[i];
      }
    }

    console.log(maxNum);
  }
}
