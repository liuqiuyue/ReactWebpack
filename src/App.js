import React, { Component,Fragment } from 'react'
import axios from 'axios'
import { Button } from 'antd';

export class App extends Component {
        constructor(props){
        super(props)
        this.state={
        list:['22','822']
        }
  }
  addList=()=>{
    console.log('111');
  }
//   shouldComponentUpdate(nextProps,nextState){
//     if(nextProps.content !== this.props.content){
//         return true
//     }else{
//         return false
//     }
   
// }
  // // shouldComponentUpdate(nextProps, nextState),有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化react程序性能
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.id !== this.props.id
  // }

componentDidMount(){
  axios.get('https://www.easy-mock.com/mock/5d0340533cdd021957aa67fe/index/country')
      .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res)) 
    this.setState({list:JSON.stringify(res)})
    })
      .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
  render() {
    return (
      <Fragment>
           <button onClick={this.addList}> 增加 </button>
            <ul>
                {
                  this.state.list.map((item,index)=>{
                    return <li key={index}> <Button type="primary">{item}Button</Button><p>{index}</p><hr/></li>
                  })
                }
            </ul>  
      </Fragment>
    )
  }
}

export default App
