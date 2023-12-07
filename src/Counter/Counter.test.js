import { render,screen } from "@testing-library/react";
import Counter from "./Counter";
import user from '@testing-library/user-event'

describe('Counter',()=>
{
    test('render Correctly',()=>
    {
        render(<Counter></Counter>)
        const CounterEllement=screen.getByRole("heading");
        expect(CounterEllement).toBeInTheDocument();

        const IncrementButton=screen.getByRole('button',
        {
            name:'Increment'
        });
        expect(IncrementButton).toBeInTheDocument();
    })

    test('render a count of 0',()=>
    {
        render(<Counter></Counter>);
        const countElement=screen.getByRole('heading');
        expect(countElement).toHaveTextContent(0);
    })

    test('render a count 1 after clicking the increment button',async()=>
    {
      
        render(<Counter></Counter>)
        const incrementButton=screen.getByRole("button",{
            name:'Increment',
        });
        await user.click(incrementButton)
        const countElement1=screen.getByRole('heading')
        expect(countElement1).toHaveTextContent(1);
    })

    // click()
    // dblClick()
    // tripleClick()
    // hover()
    // unhover()

    // test('render a count 2 after clicking the increment button',async()=>
    // {
        
    //     render(<Counter></Counter>)
    //     const incrementButton2=screen.getByRole("button",{
    //         name:'Increment',
    //     });
    //     await user.dblClick(incrementButton2)
    //     const countElement2=screen.getByRole('heading')
    //     expect(countElement2).toHaveTextContent('1');
    // })

    test('render a count of 10 clicking the set button',async()=>
    {
        // user.setup();
        render(<Counter></Counter>)
        const amountInput=screen.getByRole('spinbutton')
        await user.type(amountInput,'10')
        expect(amountInput).toHaveValue(10)

    })
    // test('element are focused in the right order',async()=>
    // {
    //     render(<Counter></Counter>)
    //     const amountInput1=screen.getByRole('spinbutton')
    //     const setButton=screen.getByRole('button',
    //     {
    //         name:"Set"
    //     })
    //     const incrementButton1=screen.getAllByRole('button',{
    //         name:'Increment'
    //     })
    //     await user.tab()
    //     expect(incrementButton1).toHaveFocus();
    //     await user.tab()
    //     expect(amountInput1).toHaveFocus()
    //     await user.tab()
    //     expect(setButton).toHaveFocus();

    // })



})