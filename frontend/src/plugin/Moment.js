import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

function Moment(date) {
    return moment(date).format("jD / jMM / jYYYY");
}
export default Moment;
