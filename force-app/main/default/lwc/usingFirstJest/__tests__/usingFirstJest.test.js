import { createElement } from 'lwc';
import UsingFirstJest from 'c/usingFirstJest';

describe('c-using-first-jest', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

   /* test("TODO: Check if paragraph is properly inserted", () => {
        const element = createElement('c-using-first-jest', {
            is: UsingFirstJest
        });
        document.body.appendChild(element);
       const para = element.shadowRoot.querySelector('.paragraph');
       const content = para.textContent;
       expect(content).toBe('First JEST Testing');
    });*/

    test('TODO: check if the paragrap is change onclick', ()=>{
        const element = createElement('c-using-first-jest', {
            is: UsingFirstJest

    });
    document.body.appendChild(element);
    const para= element.shadowRoot.querySelector(".paragraph");
    const textChangeHandler =jest.fn();
    
    element.addEventListener("click",textChangeHandler);
    return Promise.resolve()
           .then(() =>{
               const changeBtn = element.shadowRoot.querySelector(".text-btn");  
               changeBtn.click();

           })
           .then(()=>{
               expect(para.textContent).toBe("changed pragraph");
           });
    
});

});
