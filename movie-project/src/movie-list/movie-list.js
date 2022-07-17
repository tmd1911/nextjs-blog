import { confetti } from "dom-confetti";
import numeral from "numeral";
import React, {Component} from "react";

class MovieList extends React.Component {
    domConfettiRefs = this.props.movieData.map(()=>React.createRef());
    showParadise = idx => {
        confetti(this.domConfettiRefs[idx].current);
    }

    render() {
        const convertEnterToLine = s => {
            const s1 = s.split('\n');
            return s1.map((values,idx)=>{
                return <span key={idx}>{values}</span>;
            });
        }

        const showGenre = genres => {
            return genres.map((genre, idx) => {
                return <span key={idx}>{genre}</span>
            });
        }

        const renderMovieList = lists => {
            return lists.map((unit,idx)=> {
                return (
                    <StyledDiv key={idx} backgroundImage={unit.image} likeImage={'/images/like.svg'}>
                        <span className="title">{unit.movieName}</span>
                        <div className="genre">{showGenre(unit.genre)}</div>
                        <span className="sub">{unit.releaseDate === null ? '미개봉' : `${unit.releaseDate} 개봉`}</span>
                        {unit.releaseDate !== null && (
                            <span className="sub">
                                {`누적 관객 수: ${numeral(unit.totalAudience).format('0,0')}명 (${unit.grade}/10)`}
                            </span>
                        )}

                        <div className="sub-introduce">{convertEnterToLine(unit.subIntro)}</div>
                        <div className="like-button">
                            <span ref={this.domConfettiRefs[idx]} onClick={()=>{
                                this.showParadise(idx)
                            }}/>
                        </div>
                    </StyledDiv>
                );
            });
        }
        return <div>{renderMovieList(this.props.movieData)}</div>;
    }
};

export default MovieList;
