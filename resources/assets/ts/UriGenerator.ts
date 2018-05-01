export class UriGenerator
{
    private input: HTMLInputElement
    private output: HTMLInputElement

    public constructor(input: HTMLInputElement, output: HTMLInputElement)
    {
        this.input = input
        this.output = output
        this.input.addEventListener("keyup", this.generateUri.bind(this))
    }

    private generateUri(): void
    {
        let uri = this.input.value.toLowerCase()
        uri = this.removeSpaces(uri)
        uri = this.removeAccents(uri)
        uri = this.removeSpecialCharacters(uri)
        uri = this.removeRepeateHyphen(uri)
        this.output.value = uri
    }

    private removeSpaces(uri: string): string
    {
        return uri.replace(/\s/g,"-")
    }

    private removeAccents(uri: string): string
    {
        uri = uri.replace(/[áàãâ]/g, "a")
        uri = uri.replace(/[éèẽê]/g, "e")
        uri = uri.replace(/[íìĩî]/g, "i")
        uri = uri.replace(/[óòõô]/g, "o")
        uri = uri.replace(/[úùũûü]/g, "u")
        uri = uri.replace(/[ç]/g, "c")
        return uri
    }

    private removeSpecialCharacters(uri: string): string
    {
        uri = uri.replace(/\"/g, "")
        uri = uri.replace(/\'/g, "")
        uri = uri.replace(/\#/g, "")
        uri = uri.replace(/\*/g, "")
        uri = uri.replace(/\&/g, "")
        uri = uri.replace(/\$/g, "")
        uri = uri.replace(/\%/g, "")
        uri = uri.replace(/\@/g, "")
        uri = uri.replace(/\(/g, "")
        uri = uri.replace(/\)/g, "")
        uri = uri.replace(/\!/g, "")
        uri = uri.replace(/\?/g, "")
        uri = uri.replace(/\+/g, "")
        uri = uri.replace(/\=/g, "")
        uri = uri.replace(/\//g, "")
        uri = uri.replace(/\|/g, "")
        uri = uri.replace(/\,/g, "")
        uri = uri.replace(/\;/g, "")
        uri = uri.replace(/\:/g, "")
        uri = uri.replace(/\./g, "")
        uri = uri.replace(/\}/g, "")
        uri = uri.replace(/\{/g, "")
        uri = uri.replace(/\[/g, "")
        uri = uri.replace(/\]/g, "")
        uri = uri.replace(/\§/g, "")
        uri = uri.replace(/\º/g, "")
        uri = uri.replace(/\ª/g, "")
        return uri
    }

    private removeRepeateHyphen(uri: string): string
    {
        return uri.replace(/\-\-/g,"-")
    }
}
