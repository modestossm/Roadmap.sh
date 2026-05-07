import TicketManager from "./ticketManager.mjs";
import EmailService from "./emailService.mjs";
import DatabaseService from "./databaseService.mjs";

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);

const onBuy = () => {
    console.log("I will be removed soon");
};

ticketManager.on("buy", onBuy);
ticketManager.off("buy", onBuy);

console.log(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount("buy")}`);
ticketManager.buy("test@email", 20);

//the off() function remove the second event listener "buy" onBuy.
ticketManager.off("buy", onBuy);

console.log(`We now have: ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
ticketManager.buy("test@email", 20);

//After removing all listeners, we no longer send emails or save to the database for ticket purchases.
ticketManager.removeAllListeners("buy");
console.log(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`);

ticketManager.buy("test@email", 20);
console.log("The last ticket was bought");