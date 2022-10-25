import React from "react";
import style from './block.module.css';


export class CardClass extends React.Component {
    
    state = {
        title: this.props.title,
        count_of_likes: this.props.base_likes,
        text: this.props.text,
        depth: this.props.depth,
        is_liked: false
    }        

    inc = () => {
        this.setState(oldState => ({
            count_of_likes: oldState.count_of_likes + 1
        })
        )
    }

    dec = () => {
        this.setState(oldState => ({
            count_of_likes: oldState.count_of_likes - 1
        })
        )
    }

    pressLike = () => {
        if (this.state.is_liked) {
            this.dec();
        } else {
            this.inc();
        }

        this.setState(oldState => ({
            is_liked: !oldState.is_liked,
            
        })
        )
    }

    GetCardStyle = () => {
        if (this.state.is_liked) {
            return style.card + ' ' + style.pressed;
        } else {
            return style.card + ' ' + style.unpressed;
        }
    }

    render() {
        return(
            <div className={this.GetCardStyle()}
                 onClick={this.pressLike}>
                <h3>{this.state.title}</h3>
                <p> Depth: {this.state.depth}</p>
                <p className={style.text}> {this.state.text}</p>
                <div className={style.num}>
                    Researchers likes: {this.state.count_of_likes}
                </div>
            </div>
        )
    }
}