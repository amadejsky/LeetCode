function singleNumber(nums) {
    let xor_result = 0;
    for (let num of nums) {
        xor_result ^= num;
    }

    let diff_bit = xor_result & -xor_result;


    let a = 0, b = 0;
    for (let num of nums) {
        if (num & diff_bit) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    return [a, b];
}

