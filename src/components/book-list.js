import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book,index)=>{
            return(
                <li className="list-group-item" key={index}
                    onClick={()=>this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            )
        })
    }
    render(){
        return(
            <div className="book-list">
                <h3>Book</h3>
                <ul className="list-group col-sm-4">
                    {this.renderList()} 
                </ul>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    const{books}=state;
    return{
        books
    }
}

export default connect(mapStateToProps,{selectBook})(BookList);
