import Card from "../ui/dashboard/card/card";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Styles from "../ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

export default function DashboardPage() {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.main}>
            <div className={Styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
            <Transactions />
            <Chart />
            </div>
            <div className={Styles.side}>
                <RightBar />
                </div>
        </div>
    );
}