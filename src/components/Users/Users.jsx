import React from "react";
import User from "./User/User";
import CLS from './User/User.module.css'

class Users extends React.Component {

    componentDidMount() {
        this.props.setUsers_TC({id: this.props.myId,
            page: this.props.usersPage.currentPage,
            size: this.props.usersPage.pageSize})
    }

    onPageClick(e) {
        this.props.setUsers_TC({id: this.props.myId,
            page: e.target.innerHTML,
            size: this.props.usersPage.pageSize})
    }

    subscribeTo = (itemData) => {
        this.props.subscribeTo_TC({id: this.props.myId,
            toWho: itemData.userId,
            subscribe: itemData.follow === 'follow',
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>

                {pages.map(el => {
                    return <span key={el} onClick={(e) => {this.onPageClick(e)}}
                     className={this.props.usersPage.currentPage === el ? CLS.pageActive : CLS.page}>{el}</span>
                })}

                {
                    this.props.usersPage.users.map((item) => {
                        return (
                            <User key={item.id} avatar={item.avatar} name={item.name}
                            live={item.liveArea} follow={item.follow} toggle={this.subscribeTo}
                             id={item.id} myId={this.props.myId}
                            />
                        )
                    })
                }
            </div>  
        )
    }
}

export default Users