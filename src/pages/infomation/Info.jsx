import React, { useEffect, useState, Component } from "react";
import { useLocation, useNavigate ,Link } from 'react-router-dom'
import "../../style/Info.css"



const Info = () =>{

    const location = useLocation();
    const state = location.state;
    
    const pose_Info={
        id:state.item.id,
        title:state.item.title,
        author:state.item.author,
        content:state.item.content,
        src:state.item.src
    }

    const nav = useNavigate();

    const cam =() =>{

        return(

            <Link to={`/cam/${pose_Info.id}`} state={{pose_Info}}>
					
            </Link>
        )

    }

    const result =() =>{

        return(

            <Link to={`/evaluate/info/${pose_Info.id}/result`} state={{pose_Info}}>
					
            </Link>
        )

    }
      



    return(

        <div className="info_background">
            <section className="info_section1">

                <div className="info_title">
                    {pose_Info.title}
                </div>

                <div className="section1_part1">
                    <img className="info_img" src={pose_Info.src} />
                </div>

                <div className="section1_part2">
                    <div className="info_author"> 작성자: {pose_Info.author}  </div>
                    <div className="info_content"> {pose_Info.content}</div>
                </div>

            </section>

            <section className="info_section2">

            
                <button className="btn_cam">
                    <Link to={`/cam/${pose_Info.id}`} state={{pose_Info}}>촬영하기</Link>
                </button>
            
                <button className="btn_evaluate">자세평가</button>
                
                <button className="btn_result">
                <Link to={`/evaluate/info/${pose_Info.id}/result`} state={{pose_Info}}>결과확인</Link>
                </button>
                
                <button className="btn_cancel" onClick={()=>nav(-1) }>취소</button>
                
                
            </section>
           
        </div>
    )
    
    
   







};

export default Info;

