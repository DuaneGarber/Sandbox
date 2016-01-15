var searchInsert = function(nums, target) {
    return mergeSort(nums, target);
};

function mergeSort(nums, target, startVal, endVal) {
    var start = typeof(startVal) != 'undefined' ? startVal : 0;
    var end = typeof(endVal) != 'undefined' ? endVal : nums.length - 1;
    console.log('start = ' + start)
    console.log('end = ' + end)
    var middle = start + Math.floor((end - start)/2);
    console.log('Middle = ' + middle)
    console.log('end - start / 2 = ' + (end - start / 2))
    
    if (nums[start] === target) {
        console.log('start')
        return start;
    }
    if (nums[end] === target) {
        console.log('end')
        return end;
    }
    if (nums[middle] === target) {
        console.log('middle')
        return middle;
    }
    
    if (nums[start] > target) {
        console.log('less than start')
        return start;
    }
    
    if (nums[end] < target) {
        console.log('greater than end = ' + (end + 1) )
        return end + 1;
    }

    if (start === end) {
        if (nums[start] < target) {
            return start+1;
        } else {
            return start;
        }
    }

    if (middle === end) {
        console.log('mid = end -- nums[end] = ' + nums[end])
        if (nums[end] > target) {
            return end+1;
        } else {
            return end;
        }
    }

    if (middle === start) {
        if (nums[start] < target) {
            return start+1;
        } else {
            return start;
        }   
    }
    
    if (nums[middle] > target) {
        console.log('first half - start = ' + start + ' -- middle = ' + (middle-1))
        return mergeSort(nums, target, start, middle - 1);
    } else {
        console.log('second half =  mid = ' + middle + ' -- end = ' + (end+1))
        return mergeSort(nums, target, middle + 1, end);
    }
}

function mergeWhileSort() {
    var start, end, middle, startVal, endVal;
    var isComplete = false;

    while (!isComplete) {
        start = typeof(startVal) != 'undefined' ? startVal : 0;
        end = typeof(endVal) != 'undefined' ? endVal : nums.length - 1;
        middle = start + Math.floor((end - start)/2);

        if (nums[start] === target) {
            console.log('start')
            return start;
        }
        if (nums[end] === target) {
            console.log('end')
            return end;
        }
        if (nums[middle] === target) {
            console.log('middle')
            return middle;
        }
        
        if (nums[start] > target) {
            console.log('less than start')
            return start;
        }
        
        if (nums[end] < target) {
            console.log('greater than end = ' + (end + 1) )
            return end + 1;
        }

        if (start === end) {
            if (nums[start] < target) {
                return start+1;
            } else {
                return start;
            }
        }

        if (middle === end) {
            console.log('mid = end -- nums[end] = ' + nums[end])
            if (nums[end] > target) {
                return end+1;
            } else {
                return end;
            }
        }

        if (middle === start) {
            if (nums[start] < target) {
                return start+1;
            } else {
                return start;
            }   
        }

        if (nums[middle] > target) {
            startVal = start;
            endVal = middle - 1;
        } else {
            startVal = middle + 1;
            endVal = end;
        }    
    }
console.log(searchInsert([1,3,5,6,7,9,11], 8));
