import axios from "axios";
export default {
    getRandomPeople: function() {
        return axios.get("https://randomuser.me/api/?results=150&nat=us")
    }
}