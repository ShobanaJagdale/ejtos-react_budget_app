import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import ExpenseTotal from './components/ExpenseTotal';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='row mt-3'>
                        {               
                              <div className='col-sm'>
                                 <Budget />
                              </div>
                        }        

                        {
                        
                             <div className='col-sm'>
                                <Remaining />
                             </div>
                        }        

                        {    
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        { 
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        { 
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        

                        { 
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        
  
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
