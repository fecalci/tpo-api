import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

class PercentilesChar extends Component{

    asignInputs =()=>{
        console.log('input');
    }
    LineChar=()=>{
            return (
            <div>
                <Bar
                    data={{
                        labels:['red','blue','green'],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio:false,
                    }}
                />
            </div>
            )
        }
    render(){
        return(
        <div>
            <Bar
                data={{
                    labels:['red','blue','green'],
                }}
                height={400}
                width={600}
            />
        </div>
        )
    }
}

export default PercentilesChar