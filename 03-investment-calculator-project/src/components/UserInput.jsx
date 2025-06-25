export default function UserInput({onChangeInput,userrInput}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userrInput.initialInvestment} required={true} onChange={(event)=> onChangeInput('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userrInput.annualInvestment} required={true} onChange={(event)=> onChangeInput('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userrInput.expectedReturn} required={true} onChange={(event)=> onChangeInput('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userrInput.duration} required={true} onChange={(event)=> onChangeInput('duration',event.target.value)} />
                </p>
            </div>

        </section>
        
    );
}