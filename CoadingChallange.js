
  
//   Here is one way to solve this problem:
  
//   Initialize an array distances of the same length as blocks, 
// where the element at index i represents the farthest distance you'd have to walk to 
// reach one of your required buildings starting from block i.
//   Iterate through each block in blocks and its corresponding index i in distances.
//  For each block, iterate through each required building in reqs. For each required building,
//  find the distance from block i to the nearest block that has that building. 
// Update the element at index i in distances to be the maximum of the current value and the distance just found.
//   Find the index i of the minimum element in distances and return it.
//   This solution has a time complexity of O(n^2m), where n is the number of blocks and m is the number of required buildings. This is because we iterate through all blocks and all required buildings for each block. The space complexity is O(n), as we store a distance for each block in the distances array.
  
  
  function apartmentHunting(blocks, reqs) {
  const distances = new Array(blocks.length).fill(0);
  for (let i = 0; i < blocks.length; i++) {
    for (let req of reqs) {
      let minDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          minDistance = Math.min(minDistance, Math.abs(i - j));
        }
      }
      distances[i] = Math.max(distances[i], minDistance);
    }
  }
  return distances.indexOf(Math.min(...distances));
}
const blocks = [
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: true,
      school: false,
      store: false,
    },
    {
      gym: true,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: true,
    },
  ];
  const reqs = ["gym", "school", "store"];
  console.log(apartmentHunting(blocks, reqs)); // should print 3
  
