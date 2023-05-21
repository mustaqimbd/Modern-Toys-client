import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';


const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const fetchData = (text) => {
        fetch(`http://localhost:5000/${text}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/Math Toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='text-center mt-12 mb-8'>
            <h1 className='text-3xl font-bold mb-5'>Shop By Category</h1>
            <Tabs>
                <TabList>
                    <Tab onClick={() => fetchData('Math Toys')}>Math Toys</Tab>
                    <Tab onClick={() => fetchData('Engineering toys')}>Engineering toys</Tab>
                    <Tab onClick={() => fetchData('Science Toys')}>Science Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default ShopByCategory;