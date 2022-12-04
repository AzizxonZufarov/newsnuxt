export default defineEventHandler(async () => {
    const {data} = await $fetch(`'https://api.currencyapi.com/v3/latest?apikey=${currencyKey}'`)
    return data
})