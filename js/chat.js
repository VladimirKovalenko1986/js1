// напиши чат который проверяет возможность открытия чата с пользоватеолем
// Для этого пользователя должен быть:
// -другом
// -онлайн
// -без реживма не беспокоить

const isOnLine = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnLine && isFriend && !isDnd;
console.log('Можно открыть чат? ', canOpenChat);
