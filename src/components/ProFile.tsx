import React from "react";

export function ProFile() {
    return (
        <div className='content'>
            <div className='content-img'>
                <img
                     src="http://nomadsclub.ru/uploads/posts/2019-11/1574273694_121011_original.jpg"
                     alt="mountain"/>
            </div>
            <div className='content-wrapper'>
                <div className="content-wrapper-dis">
                    <div>
                        <img className="avatar"
                             src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava"/>

                    </div>
                  <div className="discr">
                      <div className='discr-name'>Name Surname</div>
                      <div className='discr-data'>
                          <div>Date of Birth</div>
                          <div>City</div>
                          <div>Education</div>
                          <div>Web Site</div>
                      </div>
                  </div>
                </div>

                <div>My posts</div>
                <div>New post</div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
}