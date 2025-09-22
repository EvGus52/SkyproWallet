import Header from "../../components/Header";
import GlobalStyles from "../../GlobalStyles";
import { AnalyticsContainer, AnalyticsTitle } from "./Analytics.styled";

const Analytics = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center">
        <AnalyticsContainer>
          <AnalyticsTitle>Анализ расходов</AnalyticsTitle>
        </AnalyticsContainer>
      </main>
    </>
  );
};

export default Analytics;
