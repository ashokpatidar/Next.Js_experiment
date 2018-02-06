import Fetch from 'isomorphic-unfetch';
import Layout from '../component/Layout';
import Prices from '../component/Prices';
const Index = (props) => (
    <Layout>
    <div> 
        {/* {JSON.stringify(props.bpi)} */}
        <h1>Welcome To Stock Price</h1> 
        <p>Check current rates</p>
        <Prices bpi={props.bpi}/>
    </div>
    </Layout>
);

Index.getInitialProps= async function(){
    const result = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await result.json();

    return {
        bpi:data.bpi
    }
}

export default Index;