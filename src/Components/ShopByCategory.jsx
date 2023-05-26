import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';


const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const fetchData = (text) => {
        fetch(`https://modern-toys-server.vercel.app/${text}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetch(`https://modern-toys-server.vercel.app/Math Toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                
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
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 md:mx-0'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 md:mx-0'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 md:mx-0'>
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