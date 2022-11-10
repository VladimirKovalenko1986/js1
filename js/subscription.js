// Написать скрипт проверке подписке пользователя при доступе к контенту
// Есть три типа подписки: free, pro and vip
// Получить доступ могт только пользователи pro and vip

const sub = 'pro';
// Если пользователь pro или vip тогда доступ есть

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к контенту? ', canAccessContent);
