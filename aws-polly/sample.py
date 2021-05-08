import boto3

# Amy <-- This one is good
# Brian
# Russell
# Joey

name = "Joey"

polly_client = boto3.Session().client('polly')
response = polly_client.synthesize_speech(VoiceId=name,Engine="neural",
    OutputFormat='mp3', 
    Text = 'This is a sample text to be synthesized. Do i sound ok?')

file = open(name + '-speech.mp3', 'wb')
file.write(response['AudioStream'].read())
file.close()