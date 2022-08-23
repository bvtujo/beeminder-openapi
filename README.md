# beeminder-openapi

Unofficial OpenAPI spec and generated clients for Beeminder's API.

This is as far as I can glean from the [official API reference](https://api.beeminder.com/#beeminder-api-reference). Right now I'm only generating a Go client but it's easy enough to generate clients in other languages:

```sh
export LANGUAGE=python
openapi-generator generate -i spec/3.0.1/beeminder.yaml -g ${LANGUAGE} -o clients/${LANGUAGE}
```

