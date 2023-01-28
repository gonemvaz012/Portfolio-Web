import React from 'react'

const Tools = () => {
    return (
        <div className='tools'>
            <div className='tools__title-ctr'>
                <h2 className='tools__title-ctr__h2'>TOOLS</h2>
            </div>
            <div className='tools__border'>
                <div className='tools__items'>
                    <img src='/img/Logos/vscode.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>Visual Studio Code</p>
                </div>
                <div className='tools__items'>
                    <img src='/img/Logos/stss.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>Spring Tool Suite</p>
                </div>
                <div className='tools__items'>
                    <img src='/img/Logos/bootstrap.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>Bootstrap 4</p>
                </div>
                <div className='tools__items'>
                    <img src='/img/Logos/adobeXd.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>Adobe XD</p>
                </div>
                <div className='tools__items'>
                    <img src='/img/Logos/Octocat.png' alt='' className='tools__items__photo'></img>
                    <img src='/img/Logos/gitlab.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>GitHub - GitLab</p>
                </div>
                <div className='tools__items'>
                    <img src='/img/Logos/mysql.png' alt='' className='tools__items__photo'></img>
                    <p className='tools__items__p'>MySQL Workbench</p>
                </div>
            </div>

        </div>
    )
}

export default Tools
