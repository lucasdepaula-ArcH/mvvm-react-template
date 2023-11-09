import { useLoginViewModel } from '../view.model';
import { renderHook, act } from '@testing-library/react'

test('useLoginViewModel initializes empty', () => {
    const { result } = renderHook(() => useLoginViewModel());

    expect(result.current.email).toBe('');
});

test('useLoginViewModel can change email correctly', () => {
    const { result } = renderHook(() => useLoginViewModel());

    const mockEmail = 'test@test.com'


    act(() => {
        result.current.handleChangeEmail({ target: { value:  mockEmail }} as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.email).toBe(mockEmail);
});