import React, {useState} from 'react';


function Textarea () {

    const [text, setText] = useState('');
    const [excludeSpace, setExcludeSpace] = useState(false);
    const [characterLimit, setCharacterLimit] = useState(false);

  
   
    const countCharacters = () => {
        return excludeSpace ? text.replace(/\s/g, '').length : text.length;
    };

    const countWords = () => {
        return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    };

    const countSentences = () => {
        return text.trim() === '' ? 0 : text.split (/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    };

    const estimateReadingTime =() => {
        const wordPerMinute = 200;
        const wordCount = countWords();
        const time =  Math.ceil(wordCount / wordPerMinute);
        return time;
    }

    return(
        <div className='container'>
            <textarea 
                className="text" 
                type="message" 
                name="message" 
                placeholder="start typing here... (or paste your text)"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div>
                <div  className='web'>
                    <label className='label'>
                        <input 
                            type='checkbox' 
                            checked={excludeSpace}
                            onChange={() => setExcludeSpace(!excludeSpace)}
                        />
                        <p>Exclude spaces</p>
                    </label>

                    <label className='label'>
                        <input 
                            type='checkbox'
                            checked={characterLimit}
                            onChange={() => setCharacterLimit(!characterLimit)}
                        />
                        <p>Set Character Limit</p>
                    </label>
                </div>
                <div className='time'>
                     <p>Approx reading time: {estimateReadingTime()} minute{estimateReadingTime() !==1 ? "s" : ""} </p>
                </div>
               
                <div className='stats'>
                    <div className='character'>
                         <p>Character count: {countCharacters()} </p>
                    </div>
                    <div className='word'>
                        <p>Word Count: {countWords()} </p>
                    </div>
                    <div className='sentence'>
                         <p>sentence count: {countSentences()} </p>
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default Textarea;