import Header from "../../components/Header";
import ExpenseForm from "../../components/ExpenseForm";
import TransactionTable from "../../components/TransactionTable";
import GlobalStyles, {
  FormColumn,
  TableGridArea,
  FormGridArea,
} from "../../GlobalStyles";

const MyExpenses = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="center" style={{ padding: "24px" }}>
        <h1
          style={{
            marginBottom: "24px",
            fontSize: "32px",
            fontWeight: "600",
            color: "#1e293b",
          }}
        >
          Мои расходы
        </h1>
        <FormColumn>
          <TableGridArea>
            <TransactionTable />
          </TableGridArea>
          <FormGridArea>
            <ExpenseForm
              onSubmit={(expenseData) => {
                console.log("Новый расход:", expenseData);
                // Здесь будет логика добавления расхода
              }}
              onCancel={() => {
                console.log("Отмена добавления расхода");
              }}
            />
          </FormGridArea>
        </FormColumn>
      </main>
    </>
  );
};

export default MyExpenses;
