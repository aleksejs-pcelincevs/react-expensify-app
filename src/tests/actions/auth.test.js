import { login, logout } from '../../actions/auth';

test('should generate login onject', () => {
    expect(login('123')).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should generate logout onject', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT',
    });
});

