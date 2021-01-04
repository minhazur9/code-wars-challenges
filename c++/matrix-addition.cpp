#include <vector>
 
// Returns sum of two matrices
std::vector<std::vector<int> > matrixAddition(std::vector<std::vector<int> > a,std::vector<std::vector<int> > b){
  std::vector<std::vector<int> > vec = {};
  for(int n = 0; n < a.size(); n++) {
    vec.push_back({});
    for(int m = 0; m < a[n].size(); m++) {
        vec[n].push_back(a[n][m] + b[n][m]);
    }
  }
  return vec;
}