class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.players = [];
    }


    newAdditions(footballPlayers) {
        let playersInvt = [];
        for (let el of footballPlayers) {
            let [name, age, playerValue] = el.split('/');
            if (!this.players.includes(name)) {
                age = Number(age);
                playerValue = Number(playerValue);
                this.invitedPlayers.push({ name, age, playerValue });
                this.players.push(name);
                playersInvt.push(name);

            } else {
                let index = this.players.indexOf(name);
                playerValue = Number(playerValue);

                if (this.invitedPlayers[index].playerValue < playerValue) {
                    this.invitedPlayers[index].playerValue = playerValue;
                }
            }
        }
        return `You successfully invite ${playersInvt.join(', ')}.`

    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        if (!this.players.includes(name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let index = this.players.indexOf(name);
        if (playerOffer < this.invitedPlayers[index].playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${this.invitedPlayers[index].playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        this.invitedPlayers[index].playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`

    }

    // ageLimit(name, age) {
    //     if (!this.players.includes(name)) {
    //         throw new Error(`${name} is not invited to the selection list!`);
    //     }
    //     let index = this.players.indexOf(name);
    //     if (this.invitedPlayers[index].age <= age) {
    //         let diff = age - this.invitedPlayers[index].age;
    //         if (diff <= 5) {
    //             if (diff===0){
    //                return  `${name} will sign a contract for 1 years with ${this.clubName} in ${this.country}!`
    //             }
    //             return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
    //         } else {
    //             return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
    //         }
    //     } else {
    //         return `${name} is above age limit!`
    //     }
    // }

    ageLimit(name, age) {
        if (!this.players.includes(name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let index = this.players.indexOf(name);
        //   console.log(this.invitedPlayers[index].age);
        if (this.invitedPlayers[index].age < age) {
            let diff = age - this.invitedPlayers[index].age;
            if (diff < 5 && diff > 0) {
                // if (diff===0){
                //    return  `${name} will sign a contract for 1 years with ${this.clubName} in ${this.country}!`
                // }
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }



    transferWindowResult() {
        let output = `Players list:`;
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
        this.invitedPlayers.forEach(x =>
            output += `\nPlayer ${x.name}-${x.playerValue}`
        )
        return output;
    }



}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));

