function removeElement(nums, val) {
    let k = 0; // the number of non-val elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
