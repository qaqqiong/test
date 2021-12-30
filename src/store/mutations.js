export default {
    setRecommendDetail(state, recommend) {
        this.state.recommendDetail = recommend
    },
    addSearchNum(state, value) {
        var searchValue = state.searchValue;
        var flag = true;
        for (var i = 0; i < searchValue.length; i++) {
            if (searchValue[i].name == value) {
                searchValue[i].num++
                    flag = false;
                break;
            }
        }
        if (flag) {
            var detail = {
                name: value,
                num: 1
            }
            searchValue.push(detail)
        }
    }
}