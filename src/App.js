import React from 'react';
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/image.png';
import covid from './images/SARS-CoV-2_without_background.png';

import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

    state = {
        data: {
            data: {},
            country: '',
        }
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const data = await fetchData(country);
        
        //set the state
        this.setState({data, country: country});
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <div>
                    <img className={styles.wiki} src={covid} alt="covid" />
                    <img className={styles.image} src={coronaImage} alt="COVID-19" />
                </div>
                
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;