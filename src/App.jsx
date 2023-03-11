import Balance from "./components/Balance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {

    return (
        <Layout>
            <div style={{display: 'flex', alignItems: '', gap: '20px'}}>
                <div>
                    <Balance />
                    <Form />
                </div>
                <Transactions />
            </div>
        </Layout>
    );
}

export default App;
